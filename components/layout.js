import Link from 'next/link'
import Router from 'next/router';
import { Button } from 'antd';

export default ({Children}) => {  
	return (
        <>
            <Link href="test/a?id=1" as="test/a/1">
                {/* //唯一节点 */}
                <Button>A</Button>
            </Link>
            <Link href="test/b">
                {/* //唯一节点 */}
                <Button>B</Button>
            </Link>
            {Children}
        </>
    )
}