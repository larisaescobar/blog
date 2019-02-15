import PageLink  from './PageLink';

const MainNav = props => (
    <div>
        <img src="../static/images/logo.svg" alt="logo blog circles" />
        <div>
            <PageLink id='home' title='Home' />
            <PageLink id='stories' title='Stories' />
            <PageLink id='about' title='Us' />
            <PageLink id='contact' title='Contact'/>
        </div>
        <div>
            <h1>we write</h1>
        </div>
    </div>
);

export default MainNav;