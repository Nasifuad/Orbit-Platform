import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Post = () => {
  return (
    <div className=" flex flex-col gap-3 w-full bg-black p-3 border-[#2c2f33] border-[0.5px]">
      <form action="">
        <div></div>
        <Select className="bg-gray-800 dark:text-white dark:border-gray-600">
          <SelectTrigger className="w-max text-white bg-black border-[0.5px] border-[#2c2f33]">
            <SelectValue placeholder="Everyone" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white dark:border-gray-600">
            <SelectGroup>
              <SelectItem value="followers">Followers</SelectItem>
              <SelectItem value="me">Only Me</SelectItem>
              <SelectItem value="everyone" Selected>
                Everyone
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <textarea
          className="capitalize w-full bg-transparent text-white outline-none placeholder:text-gray-500 placeholder:text-2xl border-b-[0.5px] border-[#2c2f33] resize-none overflow-hidden p-2"
          placeholder="What's on your mind?"
          rows={3} // Starting with a single row
        />
        <button className="text-gray-400 hover:text-gray-300 text-xl bg-[#2c2f33] px-4 py-2 rounded-full mt-2">
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
