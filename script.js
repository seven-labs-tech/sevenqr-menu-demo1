// Menu data structure
const menuData = {
    main: [
        {
            id: 'breakfasts',
            title: 'BREAKFASTS (8 AM - 10 AM)',
            class: 'breakfasts'
        },
        {
            id: 'hot-meals',
            title: 'HOT MEALS',
            class: 'hot-meals'
        },
        {
            id: 'salads',
            title: 'SALADS',
            class: 'salads'
        },
        {
            id: 'desserts',
            title: 'DESSERTS',
            class: 'desserts'
        }
    ],
    bar: [
        {
            id: 'soft-drinks',
            title: 'SOFT DRINKS',
            class: 'soft-drinks'
        },
        {
            id: 'beer',
            title: 'BEER',
            class: 'beer'
        },
        {
            id: 'cocktails',
            title: 'COCKTAILS',
            class: 'cocktails'
        },
        {
            id: 'wine',
            title: 'WINE',
            class: 'wine'
        }
    ]
};

// Detailed menu items data
const menuItemsData = {
    breakfasts: [
        {
            id: 'full-english',
            name: 'Full English breakfast',
            description: 'Fried eggs, bacon, toast, cherry tomatoes',
            price: 699,
            weight: '400 g',
            image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'oatmeal',
            name: 'Oatmeal',
            description: 'Oatmeal with seasonal berries and berry syrup',
            price: 325,
            weight: '150 g',
            oldPrice: 400,
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'cheese-pancakes',
            name: 'Cheese pancakes with strawberry jam',
            description: 'Fresh cottage cheese pancakes with strawberry jam and sour cream',
            price: 460,
            weight: '150 g',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'avocado-toast',
            name: 'Avocado toast',
            description: 'Rye toast with avocado and boiled egg',
            price: 215,
            weight: '70 g',
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'catfish-pumpkin',
            name: 'Catfish on pumpkin puree',
            description: 'Catfish fillet baked with young potatoes. Served with salad and pumpkin puree',
            price: 650,
            weight: '380 g',
            image: 'https://images.unsplash.com/photo-1565299507177-b0ac66773834?w=400&h=300&fit=crop&crop=center'
        }
    ],
    'hot-meals': [
        {
            id: 'dumplings',
            name: '"Homemade" dumplings',
            description: 'Vareniki with mashed potatoes and fried chanterelles',
            price: 450,
            weight: '250 g',
            image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'vegan-soup',
            name: 'Potatoes, carrots, onions soup',
            description: '🌱 Vegan',
            price: 430,
            weight: '300 g',
            specialBadge: '🌱 Vegan',
            image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'burger',
            name: 'Burger',
            description: 'Signature burger with a patty of your choice',
            price: 460,
            weight: '250 g',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'borscht',
            name: 'Borscht',
            description: 'Beetroot borsch with bacon and donuts',
            price: 460,
            weight: '400 g',
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'fish-pancakes',
            name: 'Fish pancakes',
            description: 'Pancakes with salmon and salad',
            price: 650,
            weight: '150 g',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'hot-rolls',
            name: 'Hot rolls',
            description: 'Temporarily unavailable',
            price: 490,
            weight: '200 g',
            unavailable: true,
            image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop&crop=center'
        }
    ],
    salads: [
        {
            id: 'avocado-salad',
            name: 'Avocado salad with feta',
            description: 'Ripe avocado, feta cheese, olives and spinach salad',
            price: 490,
            weight: '300 g',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'camembert-salad',
            name: 'Camembert salad',
            description: 'Baked Camembert cheese with fresh vegetables',
            price: 450,
            weight: '320 g',
            image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'greek-salad',
            name: 'Greek salad',
            description: 'Tomato, cucumber, olives, feta, olive oil',
            price: 550,
            weight: '300 g',
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'guacamole',
            name: 'Guacamole',
            description: 'Mexican guacamole with nachos',
            price: 390,
            weight: '200/50 g',
            specialBadge: '🔥 Spicy',
            image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop&crop=center'
        }
    ],
    desserts: [
        {
            id: 'raspberry-mousse',
            name: 'Raspberry mousse',
            description: 'Raspberry mousse with cream and raspberry syrup',
            price: 325,
            weight: '150 g',
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'vanilla-ice-cream',
            name: 'Vanilla ice cream',
            description: 'Vanilla ice cream with chocolate filling',
            price: 250,
            weight: '120 g',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'brownie-raspberries',
            name: 'Brownie with raspberries',
            description: 'Chocolate brownie with fresh raspberries',
            price: 475,
            weight: '150 g',
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'cheesecake',
            name: 'Cheesecake',
            description: 'Temporarily unavailable',
            price: 499,
            weight: '150 g',
            unavailable: true,
            image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'berry-ice-cream',
            name: 'Berry ice cream',
            description: 'Natural ice cream made from berries',
            price: 225,
            weight: '150 g',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center'
        }
    ],
    'soft-drinks': [
        {
            id: 'coffee',
            name: 'Coffee',
            description: 'Freshly brewed coffee',
            price: 199,
            weight: '250 ml',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'tea',
            name: 'Tea',
            description: 'Selection of premium teas',
            price: 199,
            weight: '250 ml',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'fiji-water',
            name: 'FIJI Water',
            description: 'Premium natural spring water',
            price: 500,
            weight: '500 ml',
            image: 'https://images.unsplash.com/photo-1548839140-5a6d0b0b0b0b?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'soda',
            name: 'Soda (Coke, Ginger-Ale)',
            description: 'Refreshing carbonated drinks',
            price: 500,
            weight: '330 ml',
            image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'pineapple-juice',
            name: 'Pineapple Juice',
            description: 'Fresh pineapple juice',
            price: 500,
            weight: '250 ml',
            image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'cranberry-juice',
            name: 'Cranberry Juice',
            description: 'Fresh cranberry juice',
            price: 500,
            weight: '250 ml',
            image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'red-bull',
            name: 'Red Bull',
            description: 'Energy drink',
            price: 700,
            weight: '250 ml',
            image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop&crop=center'
        }
    ],
    beer: [
        {
            id: 'lager',
            name: 'Lager',
            description: '2 variants available',
            price: 0,
            weight: '500 ml',
            image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'dark-beer',
            name: 'Dark beer',
            description: '2 variants available',
            price: 0,
            weight: '500 ml',
            image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop&crop=center'
        }
    ],
    cocktails: [
        {
            id: 'margarita',
            name: 'Margarita',
            description: 'Classic tequila cocktail',
            price: 599,
            weight: '120 ml',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'bloody-mary',
            name: 'Bloody Mary',
            description: 'Vodka, tomato juice, lemon, tabasco, celery',
            price: 599,
            weight: '200 ml',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=center'
        }
    ],
    wine: [
        {
            id: 'red-wine',
            name: 'Red wine',
            description: '2 variants - prices as per list',
            price: 0,
            weight: '750 ml',
            image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop&crop=center'
        },
        {
            id: 'white-wine',
            name: 'White wine',
            description: '2 variants - prices as per list',
            price: 0,
            weight: '750 ml',
            image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop&crop=center'
        }
    ]
};

// DOM elements
const menuButtons = document.querySelectorAll('.menu-btn');
const menuCategories = document.getElementById('menuCategories');
const searchInput = document.querySelector('.search-input');
const detailedMenu = document.getElementById('detailedMenu');
const backBtn = document.getElementById('backBtn');
const categoryTitle = document.getElementById('categoryTitle');
const menuItems = document.getElementById('menuItems');

// Current active menu
let currentMenu = 'main';
let currentCategory = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderMenu(currentMenu);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Menu button clicks
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuType = this.getAttribute('data-menu');
            switchMenu(menuType);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterCategories(searchTerm);
    });

    // Category card clicks
    menuCategories.addEventListener('click', function(e) {
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
            const categoryId = categoryCard.getAttribute('data-category');
            handleCategoryClick(categoryId);
        }
    });

    // Back button click
    backBtn.addEventListener('click', function() {
        showMainMenu();
    });
}

// Switch between main menu and drink
function switchMenu(menuType) {
    currentMenu = menuType;
    
    // Update button states
    menuButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-menu') === menuType) {
            button.classList.add('active');
        }
    });
    
    // Render the new menu
    renderMenu(menuType);
}

// Render menu categories
function renderMenu(menuType) {
    const categories = menuData[menuType];
    
    // Show loading state
    menuCategories.innerHTML = '<div class="loading">Loading menu...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        menuCategories.innerHTML = '';
        
        categories.forEach(category => {
            const categoryCard = createCategoryCard(category);
            menuCategories.appendChild(categoryCard);
        });
        
        // Add animation to cards
        const cards = menuCategories.querySelectorAll('.category-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
}

// Create category card element
function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = `category-card ${category.class}`;
    card.setAttribute('data-category', category.id);
    
    const title = document.createElement('div');
    title.className = 'category-title';
    title.textContent = category.title;
    
    card.appendChild(title);
    return card;
}

// Filter categories based on search term
function filterCategories(searchTerm) {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const cards = menuCategories.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        const categoryId = card.getAttribute('data-category');
        const categoryTitle = card.querySelector('.category-title').textContent.toLowerCase();
        let showCard = false;
        
        // Check if category title matches
        if (categoryTitle.includes(normalizedSearchTerm)) {
            showCard = true;
        } else {
            // Check if any item within this category matches the search term
            const itemsInCategory = menuItemsData[categoryId];
            if (itemsInCategory) {
                showCard = itemsInCategory.some(item => 
                    item.name.toLowerCase().includes(normalizedSearchTerm) ||
                    (item.description && item.description.toLowerCase().includes(normalizedSearchTerm))
                );
            }
        }
        
        card.style.display = showCard ? 'flex' : 'none';
        
        if (showCard) {
            card.style.animation = 'fadeIn 0.3s ease';
        }
    });
}

// Handle category click
function handleCategoryClick(categoryId) {
    // Add click animation
    const card = document.querySelector(`[data-category="${categoryId}"]`);
    card.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 150);
    
    // Show detailed menu for this category
    showDetailedMenu(categoryId);
}

// Show detailed menu page
function showDetailedMenu(categoryId) {
    currentCategory = categoryId;
    const categoryData = menuData[currentMenu].find(cat => cat.id === categoryId);
    const items = menuItemsData[categoryId] || [];
    
    // Update category title
    categoryTitle.textContent = categoryData ? categoryData.title : 'Menu Items';
    
    // Hide main menu and show detailed menu
    menuCategories.style.display = 'none';
    detailedMenu.style.display = 'block';
    
    // Render menu items
    renderMenuItems(items);
}

// Show main menu
function showMainMenu() {
    detailedMenu.style.display = 'none';
    menuCategories.style.display = 'grid';
    currentCategory = null;
}

// Render menu items
function renderMenuItems(items) {
    menuItems.innerHTML = '';
    
    items.forEach((item, index) => {
        const itemElement = createMenuItemElement(item);
        menuItems.appendChild(itemElement);
        
        // Add animation delay
        itemElement.style.opacity = '0';
        itemElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            itemElement.style.transition = 'all 0.5s ease';
            itemElement.style.opacity = '1';
            itemElement.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Create menu item element
function createMenuItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = `menu-item ${item.unavailable ? 'unavailable' : ''}`;
    
    const priceDisplay = item.price > 0 ? `${item.price} birr` : 'Price on request';
    const oldPriceDisplay = item.oldPrice ? `<span class="old-price">${item.oldPrice} birr</span>` : '';
    const specialBadge = item.specialBadge ? `<span class="special-badge">${item.specialBadge}</span>` : '';
    
    itemDiv.innerHTML = `
        <div class="menu-item-image" style="background-image: url('${item.image}')"></div>
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-description">${item.description}${specialBadge}</p>
            <div class="menu-item-details">
                <div class="menu-item-price">
                    ${oldPriceDisplay}${priceDisplay}
                </div>
                <div class="menu-item-weight">${item.weight}</div>
            </div>
            <div class="menu-item-actions">
                ${item.unavailable ? '' : '<button class="add-btn"><i class="fas fa-plus"></i></button>'}
                <button class="details-btn"><i class="fas fa-list"></i></button>
            </div>
        </div>
    `;
    
    return itemDiv;
}

// Show category details (demo function)
function showCategoryDetails(categoryTitle) {
    // Create a simple modal or alert for demo
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 16px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    modalContent.innerHTML = `
        <h2 style="margin-bottom: 20px; color: #2c3e50;">${categoryTitle}</h2>
        <p style="margin-bottom: 20px; color: #666;">This is a demo category. In a real application, this would show the menu items for this category.</p>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: #e67e22; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;">
            Close
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add CSS animation for fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
