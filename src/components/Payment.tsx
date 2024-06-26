import { Down } from "../icons";
import Badge from "./Badge";
import { formatDate } from "../helpers";
import { LinkPayment } from "@prisma/client";

const Payment = ({
  payment,
  amount,
}: {
  payment: LinkPayment;
  amount: number;
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
        <div className="flex gap-x-2 justify-start items-center">
          <Down />
          <div className="flex flex-col items-start justify-start gap-x-2">
            <small className=" text-gray-900">
              {formatDate(payment?.createdAt?.toString())}
            </small>
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <Badge label="paid" />
            <p>${amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
