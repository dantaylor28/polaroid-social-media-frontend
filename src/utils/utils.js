import { axiosReq } from "../api/axiosDefaults";

export const getMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
  } catch (error) {}
};
