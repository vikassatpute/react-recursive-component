"use client";

import { Comment, comment } from "@/lib/comments";
import React, { useState } from "react";

export function CommentsComponent() {
  return (
    <div>
      {comment.map((comment) => (
        <div key={comment.id}>
          <CommentComponent comment={comment} />
        </div>
      ))}
    </div>
  );
}

type CommentComponentProps = {
  comment: Comment;
};

function CommentComponent({ comment }: CommentComponentProps) {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="mb-4 bg-gray-900 p-3 rounded">
        <div className="flex items-center gap-3 mb-2">
          <img
            className="rounded-full"
            src={comment.image}
            alt={comment.name}
            height={32}
            width={32}
          />
          <p className="font-bold">{comment.name}</p>
        </div>
        <p className="text-sm text-gray-300">{comment.body}</p>
        {comment.comment && comment.comment.length !== 0 && (
          <button
            type="button"
            className="text-xs"
            onClick={() => setExpand(!expand)}
          >
            {!expand ? "see" : "hide"} replies
          </button>
        )}
      </div>
      {expand && (
        <div className="ml-6 mt-2">
          {comment.comment &&
            comment?.comment?.map((comment) => (
              <CommentComponent key={comment.id} comment={comment} />
            ))}
        </div>
      )}
    </>
  );
}
