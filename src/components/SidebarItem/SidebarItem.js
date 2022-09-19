export default function SidebarItem(props) {
    return (
          <div className="sidebar__item">
                <a className="sidebar__link" href={props.sidebarItemUrl}>
                  <img className="sidebar__img" src={props.sidebarItemImageUrl} alt={props.sidebarItemImageAlt} />
                </a>
          </div>
    );
  }