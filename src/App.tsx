import { Ban, BookAIcon } from "lucide-react";
import { BellRing } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import { CircleAlert } from 'lucide-react';

import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <div className="app">
      <Alert
        type={"alert-default"}
        icon={<BellRing size={20} />}
        title={"Upgrade Your Plan"}
      >
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime
        modi ipsam animi, incidunt expedita recusandae aut! Fugiat, iusto alias.
        </p>
   
      </Alert>
      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Something Went Wrong"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandaedicta dolorem quisquam perspiciatis saepe blanditiis porro numquam, essenecessitatibus et."
        }
      />
      <Alert
        type={"alert-info"}
        icon={<NotepadText size={20} />}
        title={"Note"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandaedicta dolorem quisquam perspiciatis saepe blanditiis porro numquam, essenecessitatibus et."
        }
      />
      <Alert
        type={"alert-success"}
        icon={<BookAIcon size={20} />}
        title={"Success"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandaedicta dolorem quisquam perspiciatis saepe blanditiis porro numquam, essenecessitatibus et."
        }
      />
      <Alert
        type={"alert-warning"}
        icon={<CircleAlert size={20} />}
        title={"Tips & Tricks"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandaedicta dolorem quisquam perspiciatis saepe blanditiis porro numquam, essenecessitatibus et."
        }
      />
    </div>
  );
}

export default App;
