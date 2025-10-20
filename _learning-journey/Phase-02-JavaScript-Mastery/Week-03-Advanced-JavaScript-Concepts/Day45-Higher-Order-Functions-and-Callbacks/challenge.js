function analyzeActivities(activities, callback) {
    // Analyze activities using the provided callback
    return activities.filter(callback);
}

const activites = [
  { type: 'swap', value: 250, status: 'success' },
  { type: 'stake', value: 1000, status: 'pending' },
  { type: 'transfer', value: 50, status: 'success' },
]

// Callbacks
const filterSuccess = a => a.status === 'success';
const filterHighValue = a => a.value > 200;

console.log('✅ Successful Activities:');
console.table(analyzeActivities(activites, filterSuccess));

console.log('✅ High Value Activities:');
console.table(analyzeActivities(activites, filterHighValue));
