
import HomeIcon from "@material-ui/icons/Home";
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "../../components/SideBar2";
import Link from 'next/link';

//

function App() {
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default App;



//  // {
//           //   name: "desktop",
//           //   label: "Desktop",
//           //   Icon: DesktopWindowsIcon,
//           //   items: [
//           //     { name: "schedule", label: "Schedule" },
//           //     { name: "frequency", label: "Frequency" }
//           //   ]
//           // },

//           function onClick(e, item) {
//             //   window.alert(JSON.stringify(item, null, 2));
//             // }

//             // const items = [
//             //   { name: "home", label: "Home", Icon: HomeIcon },
//             //   {
//             //     name: "Beers",
//             //     label: "Beers",
//             //     Icon: LocalDrinkIcon,
//             //     items: [
//             //       { name: "beers", label: "Beers", onClick },
//             //       { name: "Beer Menu", label: "Beer Menu", onClick },
//             //       { name: "Wine Menu", label: "Wine Menu", onClick }
//             //     ]
//             //   },
//             //   "divider",
//             //   {
//             //     name: "foodmenu",
//             //     label: "Food Menu",
//             //     Icon: FastfoodIcon,
//             //     items: [
//             //       { name: "mittags", label: "Mittags" },
//             //       { name: "seasonal", label: "Seasonal", onClick },
//             //       "divider",
//             //       {
//             //         name: "standard",
//             //         label: "Standard Card",
//             //         Icon: FastfoodIcon,
//             //         items: [
//             //           { name: "bbq", label: "BBQ", onClick },
//             //           { name: "classics", label: "Classics", onClick },
//             //           { name: "desserts", label: "Desserts", onClick },
//             //           { name: "salads", label: "Salads", onClick },
//             //           { name: "sandwiches", label: "Sandwiches", onClick },
//             //           { name: "sausages", label: "Sausages", onClick },
//             //           { name: "sides", label: "Sides", onClick },
//             //           { name: "snacks", label: "Snacks", onClick },
//             //           { name: "soups", label: "Soups", onClick }
//             //         ]
//             //       }
//             //     ]
//             //   }
//             // ];