import Etheurom from "../assets/eth.png";

type Props = {
  collectionImg: string;
  collectionName: string;
  collectionRate: number;
}

export const Collection = ({ collectionImg, collectionName, collectionRate }: Props) => {
  return (
    <div className="p-[7px] border rounded-[18px] w-fit font-semibold text-sm">
      <div className="w-[13rem] h-[13rem] overflow-hidden rounded-[15px]">
        <img className="object-cover w-[13rem] h-[13rem]" src={collectionImg} />
      </div>
      <div className="px-1 py-2 flex items-center justify-between">
        <p className="w-fit">{collectionName}</p>
        <div className="w-fit flex">
          <img src={Etheurom} />
          <span>{collectionRate}</span>
        </div>
      </div>
      <button className="w-full flex items-center justify-center border border-neutral-950 py-1.5 rounded-md">
        Place a bid
      </button>
    </div>
  );
};
