import React from "react";
import Layout from "../../layout/Layout";
import Card from "../../layout/Card";
import { Scancard } from "../../layout/Scancard";
import {Channellingactions} from "../../layout/Channellingactions"
import { Bookedslots } from "../../layout/Bookedslots";

export default function Doctordashboard() {
  return (
    <div>
      <Layout>
        <Card />
        <Scancard />
          <Channellingactions />
          <Bookedslots/>
      </Layout>
    </div>
  );
}
