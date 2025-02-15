import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://volunteer-management-vert.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
