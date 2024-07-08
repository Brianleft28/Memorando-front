import { findOneFiltered} from '../../../services/memos/memosServices';

interface LoadParams {
    params: {
        memoId: string;
    };

}

export async function load ({ params }: LoadParams) {     
    const fetchMemo = async () => {
        const response = await findOneFiltered(parseInt(params.memoId));

        try {
            const memo =  response; //
            return memo;
        } catch (error) {
            console.error("Failed to parse JSON:", error);
            throw new Error("Failed to parse JSON from response.");
        }
    };

    const memo = await fetchMemo();

    return {
        memo        
    }
}
