import SidebarBlock from '../SidebarBlock/SidebarBlock';
import SidebarPerson from '../SidebarPerson/SidebarPerson';

export default function MainSidebarRight() {
    return (
      <div className="main__sidebar sidebar">
        <SidebarPerson personName="Sergey.Ivanov" />
        <SidebarBlock initSeconds={3} />
      </div>
    );
}