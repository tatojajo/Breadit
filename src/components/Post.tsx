import { Vote, Post, User } from "@prisma/client";
import { FC } from "react";

interface PostProps {
  subredditName: string;
  post: Post & {
    author: User;
    votes: Vote[];
  };
}

const Post: FC<PostProps> = ({ subredditName, post }) => {
  return (
    <div className="rounded-md bg-white shadow">
      <div className="px-6 py-4 flex justify-between">
        <div className="w-0 flex-1">
          <div className="max-h-40 mt-1 text-xs text-grey-500">
            {subredditName ? (
              <div>
                <a
                  className="underlie text-zinc-900 text-am underline-offset-2"
                  href={`/r/${subredditName}`}
                >
                  r/{subredditName}
                </a>
                <span className="px-1">.</span>
              </div>
            ) : null}
            <span>Posted By u/{post.author.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
