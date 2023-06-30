const mongoose = require('mongoose');
const Review = require('../src/models/review.model');

describe('Review Model', () => {
  beforeAll(async () => {
    // Conectar com o banco MONGO
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Desconectar do banco MONGO
    await mongoose.connection.close();
  });

  afterEach(async () => {
    // Limpar o banco depois de cada teste
    await Review.deleteMany({});
  });

  it('Criação de um novo review', async () => {
    const reviewData = {
      user: new mongoose.Types.ObjectId(), // Generate a new ObjectId
      content: 'Eh os guri do gremio',
      mediaType: 'xbox',
      mediaId: '123',
      mediaTitle: 'God of war',
      mediaPoster: 'imagem.jpg',
    };

    const createdReview = await Review.create(reviewData);

    expect(createdReview).toMatchObject(reviewData);
  });

  it('Teste negativo: verificando se é capaz de criar review sem o campo usuário (NÃO DEVE SER)', async () => {
    const reviewData = {
      content: 'Ehosguri do gremio',
      mediaType: 'ps4',
      mediaId: '123',
      mediaTitle: 'The last of us',
      mediaPoster: 'imagem.jpg',
    };

    let error;
    try {
      await Review.create(reviewData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(error.errors.user).toBeDefined();
  });

});
