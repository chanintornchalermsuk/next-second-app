//Dynamic Routing -> /member/normal/?????
export default async function Page({ params }: { params: { memid: string, memname: string, memage: string } }) {
  const { memid, memname, memage } = await params;

  return (
    <div>
      <h1>Member VIP Page</h1>
      <p>Member ID: {memid}</p>
      <p>Member Name: {memname}</p>
      <p>Member Age: {memage}</p>
    </div>
  );
}
