import RewardsProgresses from "../_components/RewardsProgresses";

const RewardPage = () => {
  const { data, status, message } = {};

  return (
    <div>
      <Component rewards={data} />
    </div>
  );
};

export default RewardPage;

function Component({ rewards }) {
  return (
    <div className="">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex gap-2.5 items-end mb-10 pb-4 border-b-2 border-gray-700 ">
          <p className="text-4xl font-bold">{rewards?.points}</p>
          <p className="text-2xl font-light text-gray-800 ">Reward Point</p>
        </div>

        {/* Progress Cards */}
        <RewardsProgresses rewards={rewards?.rewards} />

        {/* How to earn more points link */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-[#d1a9fb] text-lg hover:text-[#7b6198] transition-colors">
            How to earn more points
          </button>
        </div>
      </div>
    </div>
  );
}
