const Importsection = () => {
  return (
    <>
  <link rel="stylesheet" href="/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/global.css" />
  <link rel="stylesheet" href="/css/not_found.css" />
  <link rel="stylesheet" href="/css/font-awesome.min.css" />
</>
  )
};

const NotFound: React.FC = () => {
  return (
    <>
    <Importsection />

    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
    </div>
    </>
  );
  
};

export default NotFound;
