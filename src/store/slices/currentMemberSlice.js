import { createSlice } from "@reduxjs/toolkit";

const localStorageTeamKey = "currentMember";
function decodeValue(key) {
  if (localStorage.getItem(localStorageTeamKey)) {
    return JSON.parse(localStorage.getItem(localStorageTeamKey))[key];
  }
  return null;
}
const currentMemberSlice = createSlice({
  name: "currentMember",
  initialState: {
    teamMemberId: decodeValue("teamMemberId"),
    teamId: decodeValue("teamId"),
    addedBy: decodeValue("addedBy"),
    teamMemberRole: decodeValue("teamMemberRole"),
    addedAt: decodeValue("addedAt"),
    userId: decodeValue("userId"),
    email: decodeValue("email"),
    username: decodeValue("username"),
    pic: decodeValue("pic"),
  },
  reducers: {
    setCurrentMember: (state, action) => {
      const {
        teamMemberId,
        teamId,
        addedBy,
        teamMemberRole,
        addedAt,
        userId,
        email,
        username,
        pic,
      } = action.payload;
      localStorage.setItem(
        localStorageTeamKey,
        JSON.stringify({
          teamMemberId,
          teamId,
          addedBy,
          teamMemberRole,
          addedAt,
          userId,
          email,
          username,
          pic,
        })
      );
      state.teamMemberId = teamMemberId;
      state.teamId = teamId;
      state.addedBy = addedBy;
      state.teamMemberRole = teamMemberRole;
      state.addedAt = addedAt;
      state.userId = userId;
      state.email = email;
      state.username = username;
      state.pic = pic;
    },
  },
});

export const { setCurrentMember } = currentMemberSlice.actions;
export const currentMemberReducer = currentMemberSlice.reducer;