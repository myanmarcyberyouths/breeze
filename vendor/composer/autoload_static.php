<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit470863efcdbf6b4a2a447cbc4f8c027a
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit470863efcdbf6b4a2a447cbc4f8c027a::$classMap;

        }, null, ClassLoader::class);
    }
}
