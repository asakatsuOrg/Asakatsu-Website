import Button from "../components/Button";

const AddingGoals = () => {
  return (
    <div className="mt-[100px] flex flex-col items-center p-4">
      <h1 className="text-center text-4xl font-bold">
        Set your goal and break it into <br /> smaller chunks.
      </h1>

      <form
        action=""
        className="w-full max-w-[677px] mt-8 flex flex-col gap-5 font-medium">
        <input
          type="text"
          placeholder="What is your goal?"
          className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"
          name="goal"
        />
        <div className="grid grid-cols-3 gap-4 px-4">
          <label htmlFor="">Steps to achieve the goal</label>
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Step 1"
              className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"
              name="step1"
            />
            <input
              type="text"
              placeholder="Step 2"
              className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px] mt-2"
              name="step2"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center px-4">
          <label htmlFor="">Do you have a target date for this?</label>
          <div className="col-span-2">
            <input
              type="date"
              className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"
            />
          </div>
        </div>

        <textarea
          name="achieve"
          id=""
          rows="5"
          placeholder="What will you achieve by completing this goal?"
          className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"></textarea>

        <Button buttonType={"normal"}>Add</Button>
      </form>
    </div>
  );
};

export default AddingGoals;
