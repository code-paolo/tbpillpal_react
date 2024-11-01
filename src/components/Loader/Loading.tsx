const Loading = ({ LoadingName }: { LoadingName: string }) => {
  return (
    <div className="flex items-center justify-center relative z-50 bg-white  h-screen w-screen">
      <div className="text-center">
        <img className="mx-auto mb-4" src="/pill_loading.gif" alt="Loading" />
        <h1 className="font-bold text-2xl text-pillpalColorMain">
          {LoadingName}
        </h1>
      </div>
    </div>
  );
};

export default Loading;
