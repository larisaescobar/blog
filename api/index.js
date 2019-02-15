import Prismic from 'prismic-javascript';
import { PRISMIC_API_URL } from '../config';

const getBlogPostsAPI = async params => {
    
    try {
        // initialize Prismic API
        const API = await Prismic.api(PRISMIC_API_URL);
        // query blog_post type entries
        const response = await API.query(
            Prismic.Predicates.at('document.type', 'blog_post'),
            {
                orderings: '[my.blog_post.date desc]',
                ... params
            }
        );
        return response;
    } catch(error) {
        return error;
    }
};

export { getBlogPostsAPI };