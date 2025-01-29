export default function CustomError({
  message,
  name,
}: {
  message?: string;
  name?: string;
}) {
  return (
    <>
      <h1 className="error text-2xl">{name}</h1>
      <div className="error text-lg">{message}</div>
    </>
  );
}
