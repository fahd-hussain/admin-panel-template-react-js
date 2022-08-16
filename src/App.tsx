import { useAppDispatch, useAppSelector } from "./hooks";
import {
  useGetPermissionsQuery,
  selectAllPermissions,
} from "./store/apiSlice/permissionSlice";
import { login } from "./store/authSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const { isLoading, refetch } = useGetPermissionsQuery();

  const data = useAppSelector(selectAllPermissions);
  console.log(data);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await dispatch(
        login({
          email: "admin@admin.com",
          password: "admin123!!",
        })
      ).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFetchPermissions = async (e: any) => {
    e.preventDefault();
    try {
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div onClick={handleLogin}>Login</div>
      {!isLoading ? (
        <div onClick={handleFetchPermissions}>Fetch Permissions</div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default App;
