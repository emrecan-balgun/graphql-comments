import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from './queries';
import Loading from 'components/Loading';
import { Typography } from 'antd';
import { Image } from 'antd';

const { Title } = Typography;

function Post() {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_POST, {
        variables: {
            id,
        },
    });
    
    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const { post } = data;

  return (
    <div>
         <Title level={3}>{post.title}</Title>
         <Image src={post.cover} />
         <div>
            {post.description}
         </div>
    </div>
  )
}

export default Post