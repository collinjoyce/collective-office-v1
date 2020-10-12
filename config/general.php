<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'craft',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // Whether to save the project config out to config/project.yaml
        // (see https://docs.craftcms.com/v3/project-config.html)
        'useProjectConfigFile' => false,
        
        // Don't transform gifs (there is quality loss and it might crash the server
        'transformGifs' => false,
        
        // CP Favicon
        'cpHeadTags' => [
		    // Traditional favicon
		    ['link', ['rel' => 'icon', 'href' => '/favicon.ico']],
		    // Scalable favicon for browsers that support them
		    ['link', ['rel' => 'icon', 'type' => 'image/svg+xml', 'sizes' => 'any', 'href' => '/assets/icons/favicon-32x32.png']],
		],
    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        
        // For DB Backups with MAMP
        'backupCommand' => getenv('BACKUP_COMMAND'),
        'restoreCommand' => getenv('RESTORE_COMMAND'),
    ],

    // Staging environment settings
    'staging' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        
        // Set this to `false` to prevent administrative changes from being made on staging
        'allowAdminChanges' => true,
    ],

    // Production environment settings
    'production' => [
        // Set this to `false` to prevent administrative changes from being made on production
        'allowAdminChanges' => true,
    ],
];
