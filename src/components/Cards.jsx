import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Cards.css";
import Sunil from "../NamingForms/Sunil";
import Gaikwad from "../NamingForms/Gaikwad";
import Joseph from "../NamingForms/Joseph";
import Pricing from "../Pricing/Pricing";

function Cards() {
  return (
    <div className=" flex flex-col justify-around ">
    
      <div className="flex flex-row">
        <Tabs>
          <TabList>
            <Tab>Sunil</Tab>
            <Tab>Gaikwad</Tab>
            <Tab>Joseph</Tab>
          </TabList>

          <TabPanel>
            <h2 className=" text-2xl px-56"><Sunil/></h2>
          </TabPanel>
          <TabPanel>
            <h2 className=" text-2xl  px-56"><Gaikwad/></h2>
          </TabPanel>
          <TabPanel>
            <h2 className=" text-2xl  px-56"><Joseph/></h2>
          </TabPanel>
        </Tabs>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Pricing</Tab>
            <Tab>About us</Tab>
            <Tab>Locate us</Tab>
          </TabList>

          <TabPanel>
            <h2 className=" text-2xl"><Pricing/></h2>
          </TabPanel>
          <TabPanel>
            <h2 className=" text-2xl">Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2 className=" text-2xl">Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Cards;
