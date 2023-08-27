document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const robuxAmountInput = document.getElementById('robuxAmount');
    const resultElement = document.getElementById('result');
    
    convertBtn.addEventListener('click', function() {
        const robuxAmount = parseFloat(robuxAmountInput.value);
        const conversionRate = 0.0125; // Example conversion rate
        
        if (!isNaN(robuxAmount)) {
            const usdEquivalent = robuxAmount * conversionRate;
            resultElement.textContent = `USD equivalent: $${usdEquivalent.toFixed(2)}`;
        } else {
            resultElement.textContent = 'Invalid input';
        }
    });
});
