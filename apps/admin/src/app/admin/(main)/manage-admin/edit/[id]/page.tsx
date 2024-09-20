import { getDataAction } from "@/actions/CommonAction";
import EditAdmin from "@/components/pages/admin/EditAdmin";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const [status, , data] = await getDataAction("/admin/users/" + params.id);
  console.log(data);
  return <EditAdmin data={data} />;
}
