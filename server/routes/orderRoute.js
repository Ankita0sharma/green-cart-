import express from 'express';
import authUser from '../middleware/authUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/orderController.js';
import authSeller from '../middleware/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod',authUser,placeOrderCOD)
orderRouter.get('/user',authUser,getUserOrders)
orderRouter.get('/seller',authSeller,getAllOrders)
orderRouter.post('/stripe',authUser,placeOrderStripe)

export default orderRouter;

/*def merge_sorted_arrays(arr1, arr2):
    i, j = 0, 0
    merged = []

    # Traverse both arrays
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1

    # Append remaining elements of arr1
    while i < len(arr1):
        merged.append(arr1[i])
        i += 1

    # Append remaining elements of arr2
    while j < len(arr2):
        merged.append(arr2[j])
        j += 1

    return merged

# Example usage
arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]
print(merge_sorted_arrays(arr1, arr2))
*/


/*def reverse_string_inplace(s):
    char_list = list(s)
    left, right = 0, len(char_list) - 1
    
    while left < right:
        char_list[left], char_list[right] = char_list[right], char_list[left]
        left += 1
        right -= 1

    return ''.join(char_list)

# Example
s = "Hello, Ankita!"
print(reverse_string_inplace(s))
*/