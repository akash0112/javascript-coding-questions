import AddValuesWithSameId from "../Pages/questions/AddValuesWithSameId";
import DuplicateElement from "../Pages/questions/DuplicateElement";
import Factorial from "../Pages/questions/Factorial";
import LargestElement from "../Pages/questions/LargestElement";
import Occurrence from "../Pages/questions/Occurrence";
import SecondLargestElement from "../Pages/questions/Second-Largest";
import SecondSmallest from "../Pages/questions/SecondSmallest";
import SmallestElement from "../Pages/questions/SmallestElement";
import SumValues from "../Pages/questions/SumValues";

export const NavData = [
  {
    link: "/",
    component: <LargestElement />,
  },
  {
    link:"/second-largest",
    component:<SecondLargestElement/>
  },
  {
    link:"/smallest",
    component:<SmallestElement/>
  },
  {
    link:"/second-smallest",
    component:<SecondSmallest/>
  },
  {
    link:"/occur-in-array",
    component:<Occurrence/>
  },
  {
    link:"/duplicate-items",
    component:<DuplicateElement/>
  },
  {
    link:"/factorial",
    component:<Factorial/>
  },
  {
    link:"/sum-values",
    component:<SumValues/>
  },
  {
    link: "/add-values-with-same-id",
    component:<AddValuesWithSameId/>
  }
];
