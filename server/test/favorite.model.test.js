const mongoose = require('mongoose');
const Favorite = require('../src/models/favorite.model');

describe('Favorite Model', () => {
  beforeAll(async () => {
    // Conectar com o banco MONGO
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Desconectar com o banco MONGO
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Deleta a coleçao de favoritos antes dos testes
    await Favorite.deleteMany();
  });

  it('Criação de um favorito', async () => {
    const favoriteData = {
      user: new mongoose.Types.ObjectId(),
      mediaType: 'pc',
      mediaId: '123',
      mediaTitle: 'The Last of Us',
      mediaPoster: 'example.jpg',
      mediaRate: 4.5,
    };

    const createdFavorite = await Favorite.create(favoriteData);

    expect(createdFavorite).toBeDefined();
    expect(createdFavorite.user).toBe(favoriteData.user);
    expect(createdFavorite.mediaType).toBe(favoriteData.mediaType);
    expect(createdFavorite.mediaId).toBe(favoriteData.mediaId);
    expect(createdFavorite.mediaTitle).toBe(favoriteData.mediaTitle);
    expect(createdFavorite.mediaPoster).toBe(favoriteData.mediaPoster);
    expect(createdFavorite.mediaRate).toBe(favoriteData.mediaRate);
  });
});
