import Link from "next/link";

import { getTeam } from "@/service/team/team";

// Server Fetching
export default async function Register() {
  const { data, error, meta } = await getTeam();

  return (
    <div>
      {error ? "ini error" + error.message : "ini tidak error"}
      <span>Register</span>
      {data !== null
        ? data?.map((el) => <p key={el.id}>{el.attributes.createdAt}</p>)
        : null}
      <Link href="/mapping">goto mapping</Link>
    </div>
  );
}
