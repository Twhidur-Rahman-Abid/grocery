import { use } from "react";
import { Collapse } from "./_components/Collapse";
import QueryBoundary from "./_components/QueryBoundary";
import DefaultBtn from "./_components/DefaultBtn";
import { AddAddress, Delete, Edit } from "./_components/AddressActions";
import Pagination from "./_components/Pagination";
import UserInfoForm from "./_components/UserInfoForm";

const ProfilePage = ({ searchParams }) => {
  const { page = 1 } = use(searchParams);
  return (
    <div className=" space-y-20">
      <Collapse
        defaultOpen
        className={"border-b border-[#7B6198] pb-3"}
        title={<p className="text-2xl font-extrabold">Personal info</p>}
      >
        <UserInfo />
      </Collapse>

      <div className="mt-6 md:mt-10 space-y-6 md:space-y-10 ">
        <Address page={page} />
      </div>
    </div>
  );
};

export default ProfilePage;

function KeyValue({ label, value }) {
  return (
    <tr>
      <td className="text-gray-800 font-medium">{label}</td>
      <td className="px-2.5 text-gray-800">:</td>
      <td className="text-gray-700">{value}</td>
    </tr>
  );
}

function UserInfo() {
  // const { data } = use(userFetchClient(`/api/myDetails/`));
  const data = {};
  return <UserInfoForm initialData={data} />;
}

function Address({ page }) {
  // const {
  //   data: { count, results } = {},
  //   status,
  //   message,
  // } = use(userFetchClient(`/client/addresses/?page=${page}`)) || {};

  const {
    data: { count, results } = {},
    status,
    message,
  } = {
    data: {
      results: [
        {
          id: 1,
          name: "Jone do",
          email: "jon@mail.com",

          address: "Hmjarbag",
          city: "ctg",

          phone: "01879939332",
          is_default: true,
        },
        {
          id: 2,
          name: "Jone do",
          email: "jon@mail.com",

          address: "Rangunia",
          city: "ctg",

          phone: "01879939332",
          is_default: false,
        },
      ],
      count: 2,
    },
    status: "success",
  };

  return (
    <>
      <Collapse
        className={"border-b border-[#7B6198] pb-3"}
        title={<p className="text-2xl font-extrabold">Address info</p>}
      >
        <div className="mt-6 md:mt-10 space-y-6 md:space-y-10 ">
          <QueryBoundary status={status} errorMsg={message} count={count}>
            {results?.map((addressData) => {
              const {
                id,
                name,
                email,
                company,
                address,
                city,
                state,
                zip_code,
                phone,
                is_default,
                user,
              } = addressData || {};
              return (
                <div
                  key={id}
                  className="flex flex-wrap md:flex-nowrap gap-8 justify-between items-center"
                >
                  {/* <div className="grid grid-cols-[1fr_fit-content(1ch)_1fr] items-start gap-x-2 text-[#D5BBF2] truncate"> */}
                  <table className="text-[#D5BBF2] truncate">
                    <tbody>
                      <KeyValue label={"Name"} value={name + email} />
                      <KeyValue label={"Company"} value={company} />
                      <KeyValue label={"Address"} value={address} />
                      <KeyValue label={"City"} value={city} />
                      <KeyValue label={"Phone"} value={phone} />
                    </tbody>
                  </table>
                  {/* </div> */}

                  <DefaultBtn is_default={is_default} id={id} />
                  <div className="flex gap-5">
                    <Edit address={addressData} />
                    <Delete id={id} />
                  </div>
                </div>
              );
            })}
            {count > 10 && <Pagination totalPage={Math.ceil(5 / 10)} />}
          </QueryBoundary>
          <AddAddress />
        </div>
      </Collapse>
    </>
  );
}
