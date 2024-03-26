document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var membership = document.getElementById('membership').value;

    // Create customer object
    var customer = {
        name: name,
        email: email,
        membership: membership
    };

    // Add customer to the list
    addCustomerToList(customer);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

function addCustomerToList(customer) {
    var customerList = document.getElementById('customerList');
    var customerItem = document.createElement('div');
    customerItem.classList.add('customer');
    customerItem.innerHTML = '<strong>Name:</strong> ' + customer.name + '<br><strong>Email:</strong> ' + customer.email + '<br><strong>Membership:</strong> ' + customer.membership + '<hr>';
    customerList.appendChild(customerItem);
}