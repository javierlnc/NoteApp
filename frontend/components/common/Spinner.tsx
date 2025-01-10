import { NextPage } from "next";
import { CgSpinner } from "react-icons/cg";

interface Props {
  containerStyles: string;
}

const Spinner: NextPage<Props> = ({ containerStyles }) => {
  return (
    <div>
      <CgSpinner className={`animate-spin text-black  fill-gray-400 mr-2 ${containerStyles}`} />
      
    </div>
  );
};

export default Spinner;
