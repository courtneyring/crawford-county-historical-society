import { PageContainer } from "@/components";

import copy from '../../../copy/support/copy.md';
import placeholder from '../../../placeholderCopy/support/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Support = () => {
    return(
       <PageContainer>


       </PageContainer>
    )

}


export default Support;