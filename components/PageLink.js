import Link from 'next/link';

const PageLink = props => (
    <Link as={`/${props.id}`} href={`/page?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  );

  export default PageLink;