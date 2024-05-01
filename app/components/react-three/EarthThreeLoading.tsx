import Loading from "../svg/icons/Loading";

export default function EarthThreeLoading() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className={`scale-[2] transition-transform`}>
        <Loading />
      </div>
    </div>
  );
}
