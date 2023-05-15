import './ExpenseItem.css'
function ExpenseItem()
{
    const expenseDate=new Date(2021,2,28);
    return  (
    <div>
 {/* <div>March 28th 2021</div> */}
 <div>{expenseDate.toISOString()}</div>
 <div>
    <h2>Car Insurance</h2>
    <div>$294.67</div>
 </div>


    </div>


    );
}

export default ExpenseItem;