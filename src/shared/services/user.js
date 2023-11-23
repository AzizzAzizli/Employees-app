import { EndPoints } from "../constants/endpoints";
import { instanceAxios } from "../helper/instanceAxios";

export const getUsers=()=>instanceAxios({
    method:"GET",
    url:EndPoints.Users
})
export const getUsersID=(id)=>instanceAxios({
    method:"GET",
    url:EndPoints.UserId(id)
})
export const addUser=(form)=>instanceAxios({
    method:"POST",
    url:EndPoints.Users,
    data:form
})
export const updateUser=(id,form)=>instanceAxios({
method:"PUT",
url:EndPoints.UserId(id),
data:form
})
export const deleteUser=(id)=>instanceAxios({
    method:"DELETE",
    url:EndPoints.UserId(id),
})