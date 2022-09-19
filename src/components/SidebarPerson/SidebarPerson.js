export default function SidebarPerson(props) {
    return (
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">{props.personName}</p>
                <div className="sidebar__avatar" />
              
            </div>
    );
  }