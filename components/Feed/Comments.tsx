import React from "react";
import PostComment from "./PostComment";
import PostComments from "./PostComments";
import { Comment } from "./PostComments";
import UserPhoto from "@/assets/nav-logos/profile-photo.png";

const comments: Comment[] = [
  {
    userPhoto: UserPhoto,
    username: "Ibrahim Adm",
    reactions: {
      repliesCount: 873,
      likesCount: 87.3,
    },
    replies: [
      {
        userPhoto: UserPhoto,
        username: "Ibrahim Adm",
        reactions: {
          repliesCount: 873,
          likesCount: 87.3,
        },
        content: "which you can then publish",
        replies: [],
      },
    ],
    content:
      "social media poster allows you to schedule and posts to these different social media platforms.",
  },
];

const Comments = () => {
  return (
    <>
      <PostComment />
      {comments.map((comment) => (
        <PostComments
          userPhoto={comment.userPhoto}
          username={comment.username}
          content={comment.content}
          reactions={comment.reactions}
          replies={comment.replies}
        />
      ))}
    </>
  );
};

export default React.memo(Comments);
