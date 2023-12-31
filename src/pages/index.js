import Header from "@/components/Header Components/Header";
import Info from "@/components/Info Components/Info";
import SideBar from "@/components/SiderBar Components/SideBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen bg-[#1e1c21] overflow-x-hidden lg:overflow-y-hidden">
      <Head>
          <title>Assignment</title>
      </Head>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col flex-1">
          <Header />
          <Info />
        </div>
      </div>
    </div>
  )
}
