import axios from "axios";
import { updateError, updateStart, updateSuccess } from "./userSlice";

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("http://localhost:8800/api/users/1234/update", user);
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
};