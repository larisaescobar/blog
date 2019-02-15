import MainNav from '../components/MainNav';
import EntryCard from '../components/EntryCard';

const Index = () => (
    <div>
        <MainNav/>
        <EntryCard
            entryTitle="title"
            entryDate="2/14/2019"
            entryExcerpt="dsfsdfsdfsadfasdf
            asdfasdfasdfasdf
            asdfasdfadsfasdfasdf"
        />
    </div>
);

export default Index;
