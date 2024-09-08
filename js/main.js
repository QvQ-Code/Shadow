$(document).ready(function (){
    $(document).on("click", ".icon-box", function(){
        var parent = $(this).parent();

        $(this).addClass("active");
        $(parent).addClass("active");
    });

    function load_elements(element) {
        const $container = $('#element_container'); 

        $container.empty();

        $.each(element, function(i, element) {
            const elementName = element.name.replace(/\s+/g, '_');
            const $iconBox = $('<span>', { 
                class: `icon-box box-element`, 
                'data-element': elementName 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/${elementName}.png`,
                alt: element.name 
            });

            $icon.append($img);
            $iconBox.append($icon);
            $iconBox.append(elementName);
            $container.append($iconBox);
        });
    }

    function load_buffs(buffs) {
        const $container = $('#buff_container'); 

        $container.empty();

        $.each(buffs, function(i, buff) {
            const buffName = buff.name.replace(/\s+/g, '_');
            const $iconBox = $('<span>', { 
                class: `icon-box box-buff`, 
                'data-buff': buffName.toLowerCase() 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/${buffName}.png`,
                alt: buff.name 
            });

            $icon.append($img);
            $iconBox.append($icon);
            $container.append($iconBox);
        });
    }

    function load_debuffs(debuffs) {
        const $container = $('#debuff_container'); 

        $container.empty();

        $.each(debuffs, function(i, debuff) {
            const debuffName = debuff.name.replace(/\s+/g, '_');
            const $iconBox = $('<span>', { 
                class: `icon-box box-debuff`, 
                'data-debuff': debuffName.toLowerCase() 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/${debuffName}.png`,
                alt: debuff.name 
            });

            $icon.append($img);
            $iconBox.append($icon);
            $container.append($iconBox);
        });
    }

    function load_characters(characters) {
        const $container = $('#character_container'); 
        const $count = $('#character_count');
    
        $container.empty();

        characters.sort((a, b) => a.name.localeCompare(b.name));
    
        const uniqueCharacters = characters.filter((character, index, self) =>
            index === self.findIndex(c => c.name === character.name)
        );
    
        $count.text("Characters: " + uniqueCharacters.length);
    
        $.each(uniqueCharacters, function(i, character) {
            const characterName = character.name.replace(/\s+/g, '_');
            const $charBox = $('<div>', { class: character.element.toLowerCase() + ' char-box ' + character.trait.map(trait => trait.replace(/\s+/g, '_')).join(' ').toLowerCase() });
            // const $figure = $('<div>', { class: 'figure' });
            // const $img = $('<img>', {
            //     src: `/images/characters/${characterName}.png`,
            //     alt: characters.name 
            // });
            const $name = $('<div>', { class: 'name' });

            $name.append('<img src="/images/icons/' + character.element.toLowerCase() + '.png">');
            $name.append(character.name);
            // $figure.append($img);
            // $charBox.append($figure);
            $charBox.append($name);
            $container.append($charBox);
        });
    }
    
    load_elements(element);
    load_buffs(buffs);
    load_debuffs(debuffs);
    load_characters(characters);

    const selectedElements = {
        elements: [],
        buffs: [],
        debuffs: []
    };
    
    function updateCharBoxes() {
        const { elements, buffs, debuffs } = selectedElements;

        if (elements.length === 0 && buffs.length === 0 && debuffs.length === 0) {
            $('.char-box').fadeIn();
            $('#character_count').text("Characters: " + $('.char-box').length);
            $('.container').removeClass("active");
            return;
        }
    
        let visibleCount = 0;
    
        $('.char-box').each(function() {
            const $charBox = $(this);
            const charBoxClasses = $charBox.attr('class').split(/\s+/);
    
            const matchesElement = elements.length === 0 || elements.some(item => charBoxClasses.includes(item));
            const matchesBuff = buffs.length === 0 || buffs.some(item => charBoxClasses.includes(item));
            const matchesDebuff = debuffs.length === 0 || debuffs.some(item => charBoxClasses.includes(item));
    
            if (matchesElement && matchesBuff && matchesDebuff) {
                $charBox.fadeIn();
                visibleCount++;
            } else {
                $charBox.fadeOut();
            }
        });
    
        $('#character_count').text("Characters: " + visibleCount);
    }
    
    function handleSelection($element, selectedArray, type) {
        const elementName = $element.data(type);
    
        if (selectedArray.includes(elementName)) {
            selectedArray.splice(selectedArray.indexOf(elementName), 1);
            $element.removeClass('active');
        } else {
            selectedArray.push(elementName);
            $element.addClass('active');
        }
    
        updateCharBoxes();
    }
    
    $(document).on('click', '.box-element, .box-buff, .box-debuff', function() {
        const $this = $(this);
    
        if ($this.hasClass('box-element')) {
            handleSelection($this, selectedElements.elements, 'element');
        } else if ($this.hasClass('box-buff')) {
            handleSelection($this, selectedElements.buffs, 'buff');
        } else if ($this.hasClass('box-debuff')) {
            handleSelection($this, selectedElements.debuffs, 'debuff');
        }
    });     

    $('#character_search').on('keyup', function() {
        var searchValue = $(this).val().toLowerCase();

        $(this).addClass("active");

        if(searchValue.length <= 0){
            $(this).removeClass("active");
        }

        $('.char-box').each(function() {
            var charName = $(this).find('.name').text().toLowerCase();
            
            if (charName.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

