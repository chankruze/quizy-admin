/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 07 2022 17:43:46 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import moment from "moment";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";
import { Student } from "../../types/student";

interface Props {
  student: Student;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const StudentModal: React.FC<Props> = ({
  student,
  modalIsOpen,
  closeModal,
}) => {
  const { bioData } = student;

  Modal.setAppElement("#__next");

  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel={`${bioData.name}'s Bio Data`}
      className="bg-white rounded-lg shadow-lg border-0 outline-none"
    >
      <div className="py-4 px-8">
        {/* close button */}
        <div className="p-2 flex items-center">
          <p className="font-nunito font-bold text-xl">{`${bioData.name}'s bio-data`}</p>
          <p
            className="p-2 w-min ml-auto cursor-pointer bg-red-500 text-white hover:opacity-80"
            onClick={closeModal}
          >
            <MdClose size={24} />
          </p>
        </div>
        {/* biodata */}
        <div className="p-2">
          <table className="w-full border-collapse font-roboto">
            <thead className="text-left bg-green-500 text-white">
              <tr>
                <th className="border p-2">Key</th>
                <th className="border p-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(bioData).map((key, index) => {
                return (
                  <tr key={index}>
                    <td className="capitalize border p-2">
                      {key === "dob" ? "DOB" : key}
                    </td>
                    <td className="border p-2">
                      {key === "dob"
                        ? moment(bioData[key]).format("DD/MM/YYYY")
                        : bioData[key]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* actions */}
        <div></div>
      </div>
    </Modal>
  );
};

export default StudentModal;
