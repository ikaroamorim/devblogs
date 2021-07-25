import { DiHtml5, DiCss3, DiJsBadge, DiDatabase, DiGit, DiReact, DiVisualstudio } from "react-icons/di";
import { iconChooserProps } from "./props";

export function IconChooser(props: iconChooserProps) {
         switch ( props.option) {
         case 'html':
            return <DiHtml5 />;
            break;
         case 'css':
            return <DiCss3 />;
            break;
         case 'js':
            return <DiJsBadge />;
            break;
         case 'dataBase':
            return <DiDatabase />;
            break;
         case 'git':
            return <DiGit />;
            break;
         case 'react':
            return <DiReact />;
            break;
         case 'visualStudio':
            return <DiVisualstudio />;
            break;

         default:
            break;
      }
      return <DiHtml5></DiHtml5>
}