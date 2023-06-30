import HomePage from "../pages/HomePage";
import FavoriteList from "../pages/FavoriteList";
import mediaDetails from "../pages/MediaDetails";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import PasswordUpdate from "../pages/PasswordUpdate";
import ReviewList from "../pages/ReviewList";
import ProtectedPage from "../components/common/ProtectedPage";

export const routesGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetails: (type, id) => `/${type}/${id}`,
  mediaSearch: "/search",
  favoriteList: "/favorites",
  reviewList: "/reviews",
  passwordUpdate: "password-update"
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/search",
    element: <MediaSearch />,
    state: "search"
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update"
  },
  {
    path: "/favorites",
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: "favorites"
  },
  {
    path: "/reviews",
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: "reviews"
  },
  {
    path: "/:mediaType",
    element: <MediaList />
  },
  {
    path: "/:mediaType/:mediaId",
    element: <mediaDetails />
  }
];

export default routes;