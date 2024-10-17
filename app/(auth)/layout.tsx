const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
	  <div className="flex items-center justify-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
		<div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
		{children}
	  </div>
	  </div>
	)
  }
  
  export default Layout
